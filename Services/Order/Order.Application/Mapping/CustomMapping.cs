using Order.Application.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;

namespace Order.Application.Mapping
{
    public class CustomMapping : Profile
    {
        public CustomMapping()
        {
            CreateMap<Domain.OrderAggregate.Order,OrderDto>();
            CreateMap<Domain.OrderAggregate.OrderItem, OrderItemDto>();
            CreateMap<Domain.OrderAggregate.Address, AddressDto>();
        }
    }
}
