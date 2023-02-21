using IdentityModel;
using IdentityServer.Models;
using IdentityServer4.Validation;
using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace IdentityServer.Services
{
    public class IdentityResourceOwnerPasswordValidator : IResourceOwnerPasswordValidator
    {
        private readonly UserManager<ApplicationUser> _userManager;
        public IdentityResourceOwnerPasswordValidator(UserManager<ApplicationUser> userManager)
        {
            _userManager = userManager;
        }

        public async Task ValidateAsync(ResourceOwnerPasswordValidationContext context)
        {
            var existUser = await _userManager.FindByEmailAsync(context.UserName);
            if(existUser == null)
            {
                var erros = new Dictionary<string,object>();
                erros.Add("errors", new List<string> {"Email veya Şifre Hatalı"});
                context.Result.CustomResponse = erros;
                return;
            }

            var passwordCheck = await _userManager.CheckPasswordAsync(existUser,context.Password);
            if (!passwordCheck)
            {
                var erros = new Dictionary<string, object>();
                erros.Add("errors", new List<string> { "Email veya Şifre Hatalı" });
                context.Result.CustomResponse = erros;
                return;
            }

            context.Result = new GrantValidationResult(existUser.Id.ToString(),OidcConstants.AuthenticationMethods.Password);
        }
    }
}
