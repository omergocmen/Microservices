using IdentityServer.Dtos;
using IdentityServer.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.JsonWebTokens;
using Shared.Dtos;
using System.Linq;
using System.Threading.Tasks;
using static IdentityServer4.IdentityServerConstants;

namespace IdentityServer.Controllers
{
    [Authorize(LocalApi.PolicyName)]
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly UserManager<ApplicationUser> _manager;
        public UserController(UserManager<ApplicationUser> manager)
        {
            _manager = manager;
        }

        [HttpPost("signup")]
        public async Task<IActionResult>SingUp(SingUpDto singUpDto)
        {
            var user = new ApplicationUser
            {
                UserName = singUpDto.UserName,
                Email = singUpDto.Email,
                City = singUpDto.City,
            };
            var result = _manager.CreateAsync(user, singUpDto.Password);
            if (result.IsCompletedSuccessfully)
            {
                return BadRequest(ResponseViewModel<NoContent>.Fail(result.Result.Errors.Select(x => x.Description).ToList(), 400));
            }
            return NoContent();
        }
        [HttpGet("getuser")]
        public async Task<IActionResult> GetUser()
        {
            var userClaim = User.Claims.FirstOrDefault(x => x.Type == JwtRegisteredClaimNames.Sub);
            if(userClaim == null)
            {
                return BadRequest();
            }
            var user = await _manager.FindByIdAsync(userClaim.Value);
            if(user== null)
            {
                return BadRequest();
            }
            return Ok(new {Id=user.Id,Email=user.Email,City=user.City,UserName=user.UserName});
        }

    }
}
