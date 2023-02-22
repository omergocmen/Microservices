using MediatR;
using Order.Application.Dtos;
using Shared.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Order.Application.Commands
{
    public class CreateOrderCommand : IRequest<ResponseViewModel<CreatedOrderDto>>
    {
        public string BuyerId { get; set; }

        public List<OrderItemDto> OrderItems { get; set; }

        public AddressDto Address { get; set; }
    }
}
