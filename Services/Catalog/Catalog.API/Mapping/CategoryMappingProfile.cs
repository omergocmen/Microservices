using AutoMapper;
using Catalog.API.Dtos;
using Catalog.API.Entities;

namespace Catalog.API.Mapping
{
    public class CategoryMappingProfile : Profile
    {
        public CategoryMappingProfile()
        {
            CreateMap<Course, CourseDto>();
            CreateMap<Category, CategoryDto>();
            CreateMap<Feature, FeatureDto>();
            CreateMap<Course, CourseCreateDto>();
            CreateMap<Course, CourseUpdateDto>();
        }
    }
}
