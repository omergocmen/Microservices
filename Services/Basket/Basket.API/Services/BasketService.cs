using Basket.API.Dtos;
using Shared.Dtos;
using System.Text.Json;

namespace Basket.API.Services
{
    public class BasketService : IBasketService
    {
        private readonly RedisService _redisService;

        public BasketService(RedisService redisService)
        {
            _redisService = redisService;
        }

        public async Task<ResponseViewModel<bool>> Delete(string userId)
        {
            var status = await _redisService.GetDb().KeyDeleteAsync(userId);
            return status ? ResponseViewModel<bool>.Success(204) : ResponseViewModel<bool>.Fail("Basket not found", 404);
        }

        public async Task<ResponseViewModel<BasketDto>> GetBasket(string userId)
        {
            var existBasket = await _redisService.GetDb().StringGetAsync(userId);

            if (String.IsNullOrEmpty(existBasket))
            {
                return ResponseViewModel<BasketDto>.Fail("Basket not found", 404);
            }

            return ResponseViewModel<BasketDto>.Success(JsonSerializer.Deserialize<BasketDto>(existBasket), 200);
        }

        public async Task<ResponseViewModel<bool>> SaveOrUpdate(BasketDto basketDto)
        {
            var status = await _redisService.GetDb().StringSetAsync(basketDto.UserId, JsonSerializer.Serialize(basketDto));

            return status ? ResponseViewModel<bool>.Success(204) : ResponseViewModel<bool>.Fail("Basket could not update or save", 500);
        }
    }
}
