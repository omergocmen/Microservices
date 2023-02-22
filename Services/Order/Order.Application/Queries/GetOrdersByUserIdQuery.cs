using MediatR;
using Order.Application.Dtos;
using Shared.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Order.Application.Queries
{
    public class GetOrdersByUserIdQuery : IRequest<ResponseViewModel<List<OrderDto>>>
    {
        public string UserId { get; set; }
    }
}
