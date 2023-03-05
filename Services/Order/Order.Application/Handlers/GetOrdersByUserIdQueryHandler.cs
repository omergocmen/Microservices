using MediatR;
using Microsoft.EntityFrameworkCore;
using Order.Application.Dtos;
using Order.Application.Mapping;
using Order.Application.Queries;
using Order.Infrastructure;
using Shared.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Order.Application.Handlers
{
    internal class GetOrdersByUserIdQueryHandler : IRequestHandler<GetOrdersByUserIdQuery, ResponseViewModel<List<OrderDto>>>
    {
        private readonly OrderDbContext _context;

        public GetOrdersByUserIdQueryHandler(OrderDbContext context)
        {
            _context = context;
        }

        public async Task<ResponseViewModel<List<OrderDto>>> Handle(GetOrdersByUserIdQuery request, CancellationToken cancellationToken)
        {
            var orders = await _context.Orders.Include(x => x.OrderItems).Where(x => x.BuyerId == request.UserId).OrderByDescending(p=>p.CreatedDate).ToListAsync();

            if (!orders.Any())
            {
                return ResponseViewModel<List<OrderDto>>.Success(new List<OrderDto>(), 200);
            }

            var ordersDto = ObjectMapper.Mapper.Map<List<OrderDto>>(orders);

            return ResponseViewModel<List<OrderDto>>.Success(ordersDto, 200);
        }
    }
}
