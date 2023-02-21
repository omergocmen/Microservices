using Basket.API.Dtos;
using Shared.Dtos;

namespace Basket.API.Services
{
    public interface IBasketService
    {
        Task<ResponseViewModel<BasketDto>> GetBasket(string userId);

        Task<ResponseViewModel<bool>> SaveOrUpdate(BasketDto basketDto);

        Task<ResponseViewModel<bool>> Delete(string userId);
    }
}
