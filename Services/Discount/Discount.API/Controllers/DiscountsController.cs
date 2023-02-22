using Discount.API.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Shared.ControllerBases;
using Shared.Services;

namespace Discount.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DiscountsController : CustomBaseController
    {
        private readonly IDiscountService _discountService;

        private readonly ISharedIdentityService _sharedIdentityService;

        public DiscountsController(IDiscountService discountService, ISharedIdentityService sharedIdentityService)
        {
            _discountService = discountService;
            _sharedIdentityService = sharedIdentityService;
        }

        [HttpGet("getall")]
        public async Task<IActionResult> GetAll()
        {
            return CreateActionResultInstance(await _discountService.GetAll());
        }

        [HttpGet("getbyid")]
        public async Task<IActionResult> GetById(int id)
        {
            var discount = await _discountService.GetById(id);

            return CreateActionResultInstance(discount);
        }

        [HttpGet("getbycode")]
        public async Task<IActionResult> GetByCode(string code)

        {
            var userId = _sharedIdentityService.GetUserId;

            var discount = await _discountService.GetByCodeAndUserId(code, userId);

            return CreateActionResultInstance(discount);
        }

        [HttpPost("save")]
        public async Task<IActionResult> Save(Models.Discount discount)
        {
            return CreateActionResultInstance(await _discountService.Save(discount));
        }

        [HttpPost("update")]
        public async Task<IActionResult> Update(Models.Discount discount)
        {
            return CreateActionResultInstance(await _discountService.Update(discount));
        }

        [HttpGet("delete")]
        public async Task<IActionResult> Delete(int id)
        {
            return CreateActionResultInstance(await _discountService.Delete(id));
        }
    }
}
