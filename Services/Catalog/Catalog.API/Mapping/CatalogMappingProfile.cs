using AutoMapper;
using Catalog.API.Dtos;
using Catalog.API.Entities;

namespace Catalog.API.Mapping
{
    public class CatalogMappingProfile : Profile
    {
        public CatalogMappingProfile()
        {
            CreateMap<Course, CourseDto>();
            CreateMap<CourseDto, Course>();

            CreateMap<Category, CategoryDto>();
            CreateMap<CategoryDto, Category>();

            CreateMap<Feature, FeatureDto>();
            CreateMap<FeatureDto, Feature>();

            CreateMap<Course, CourseCreateDto>();
            CreateMap<CourseCreateDto, Course>();

            CreateMap<Course, CourseUpdateDto>();
            CreateMap<CourseUpdateDto, Course>();

        }
    }
}
