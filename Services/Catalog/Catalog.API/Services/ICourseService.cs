using Catalog.API.Dtos;
using Catalog.API.Entities;
using Shared.Dtos;

namespace Catalog.API.Services
{
    public interface ICourseService
    {
        Task<ResponseViewModel<List<CourseDto>>> GetAllAsync();

        Task<ResponseViewModel<CourseDto>> GetByIdAsync(string id);

        Task<ResponseViewModel<List<CourseDto>>> GetAllByUserIdAsync(string userId);

        Task<ResponseViewModel<CourseDto>> AddAsync(CourseCreateDto courseCreateDto);
        Task<ResponseViewModel<NoContent>> UpdateAsync(CourseUpdateDto courseUpdateDto);

        Task<ResponseViewModel<NoContent>> DeleteAsync(string id);


    }
}
