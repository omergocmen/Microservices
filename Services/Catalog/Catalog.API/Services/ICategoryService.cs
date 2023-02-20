using Catalog.API.Dtos;
using Catalog.API.Entities;
using Shared.Dtos;

namespace Catalog.API.Services
{
    public interface ICategoryService
    {
        Task<ResponseViewModel<List<CategoryDto>>> GetAllAsync();
        Task<ResponseViewModel<CategoryDto>> GetByIdAsync(string id);
        Task<ResponseViewModel<CategoryDto>> AddAsync(CategoryDto categoryDto);

    }
}
