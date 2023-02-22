using Shared.Dtos;

namespace Discount.API.Services
{
    public interface IDiscountService
    {
        Task<ResponseViewModel<List<Models.Discount>>> GetAll();

        Task<ResponseViewModel<Models.Discount>> GetById(int id);

        Task<ResponseViewModel<NoContent>> Save(Models.Discount discount);

        Task<ResponseViewModel<NoContent>> Update(Models.Discount discount);

        Task<ResponseViewModel<NoContent>> Delete(int id);

        Task<ResponseViewModel<Models.Discount>> GetByCodeAndUserId(string code, string userId);
    }
}
