using Dapper;
using Npgsql;
using Shared.Dtos;
using System.Data;

namespace Discount.API.Services
{
    public class DiscountService : IDiscountService
    {
        private readonly IConfiguration _configuration;
        private readonly IDbConnection _dbConnection;

        public DiscountService(IConfiguration configuration)
        {
            _configuration = configuration;

            _dbConnection = new NpgsqlConnection(_configuration.GetConnectionString("PostgreSql"));
        }

        public async Task<ResponseViewModel<NoContent>> Delete(int id)
        {
            var status = await _dbConnection.ExecuteAsync("delete from discount where id=@Id", new { Id = id });

            return status > 0 ? ResponseViewModel<NoContent>.Success(204) : ResponseViewModel<NoContent>.Fail("Discount not found", 404);
        }

        public async Task<ResponseViewModel<List<Models.Discount>>> GetAll()
        {
            var discounts = await _dbConnection.QueryAsync<Models.Discount>("Select * from discount");

            return ResponseViewModel<List<Models.Discount>>.Success(discounts.ToList(), 200);
        }

        public async Task<ResponseViewModel<Models.Discount>> GetByCodeAndUserId(string code, string userId)
        {
            var discounts = await _dbConnection.QueryAsync<Models.Discount>("select * from discount where userid=@UserId and code=@Code", new { UserId = userId, Code = code });

            var hasDiscount = discounts.FirstOrDefault();

            if (hasDiscount == null)
            {
                return ResponseViewModel<Models.Discount>.Fail("Discount not found", 404);
            }

            return ResponseViewModel<Models.Discount>.Success(hasDiscount, 200);
        }

        public async Task<ResponseViewModel<Models.Discount>> GetById(int id)
        {
            var discount = (await _dbConnection.QueryAsync<Models.Discount>("select * from discount where id=@Id", new { Id = id })).SingleOrDefault();

            if (discount == null)
            {
                return ResponseViewModel<Models.Discount>.Fail("Discount not found", 404);
            }

            return ResponseViewModel<Models.Discount>.Success(discount, 200);
        }

        public async Task<ResponseViewModel<NoContent>> Save(Models.Discount discount)
        {
            var saveStatus = await _dbConnection.ExecuteAsync("INSERT INTO discount (userid,rate,code) VALUES(@UserId,@Rate,@Code)", discount);

            if (saveStatus > 0)
            {
                return ResponseViewModel<NoContent>.Success(204);
            }

            return ResponseViewModel<NoContent>.Fail("an error occurred while adding", 500);
        }

        public async Task<ResponseViewModel<NoContent>> Update(Models.Discount discount)
        {
            var status = await _dbConnection.ExecuteAsync("update discount set userid=@UserId, code=@Code, rate=@Rate where id=@Id", new { Id = discount.Id, UserId = discount.UserId, Code = discount.Code, Rate = discount.Rate });

            if (status > 0)
            {
                return ResponseViewModel<NoContent>.Success(204);
            }

            return ResponseViewModel<NoContent>.Fail("Discount not found", 404);
        }
    }
}
