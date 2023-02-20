using AutoMapper;
using Catalog.API.Dtos;
using Catalog.API.Entities;
using Catalog.API.Settings;
using MongoDB.Driver;
using Shared.Dtos;

namespace Catalog.API.Services
{
    public class CategoryService : ICategoryService
    {
        private readonly IMongoCollection<Category> _categoryCollection;
        private readonly IMapper _mapper;
        public CategoryService(IMapper mapper, IDatabaseSettings databaseSettings)
        {
            var client = new MongoClient(databaseSettings.ConnectionString);
            var database = client.GetDatabase(databaseSettings.DatabaseName);
            _categoryCollection = database.GetCollection<Category>(databaseSettings.CategoryCollectionName);
            _mapper = mapper;
        }

        public async Task<ResponseViewModel<List<CategoryDto>>> GetAllAsync()
        {
            var categories = await _categoryCollection.Find(category => true).ToListAsync();

            return ResponseViewModel<List<CategoryDto>>.Success(_mapper.Map<List<CategoryDto>>(categories), 200);
        }

        public async Task<ResponseViewModel<CategoryDto>> AddAsync(CategoryDto categoryDto)
        {
            Category category = _mapper.Map<Category>(categoryDto);
             await _categoryCollection.InsertOneAsync(category);
                return ResponseViewModel<CategoryDto>.Success(_mapper.Map<CategoryDto>(category),200);
        }

        public async Task<ResponseViewModel<CategoryDto>>GetByIdAsync(string id)
        {
            var category = await _categoryCollection.Find<Category>(x => x.Id == id).FirstOrDefaultAsync();
            if(category == null)
            {
                return ResponseViewModel<CategoryDto>.Fail("Category Not Found", 404);
            }
            return ResponseViewModel<CategoryDto>.Success(_mapper.Map<CategoryDto>(category), 200);
        }

    }
}
