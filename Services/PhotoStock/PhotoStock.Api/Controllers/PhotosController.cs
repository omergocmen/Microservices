using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PhotoStock.API.Dtos;
using Shared.ControllerBases;
using Shared.Dtos;

namespace PhotoStock.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PhotosController : CustomBaseController
    {
        [HttpPost("photosave")]
        public async Task<IActionResult> PhotoSave(IFormFile photo, CancellationToken cancellationToken)
        {
            if (photo != null && photo.Length > 0)
            {
                var path = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot/photos", photo.FileName);
                using (var stream = new FileStream(path, FileMode.Create))
                {
                    await photo.CopyToAsync(stream, cancellationToken);
                }

                var returnPath = "photos/" + photo.FileName;

                PhotoDto photoDto = new() { PictureUrl = returnPath };
                return CreateActionResultInstance(ResponseViewModel<PhotoDto>.Success(photoDto, 200));
            }
            return CreateActionResultInstance(ResponseViewModel<PhotoDto>.Fail("photo is empty", 400));
        }

        [HttpGet("photodelete")]
        public IActionResult PhotoDelete(string photoUrl)
        {
            var path = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot/photos", photoUrl);
            if (!System.IO.File.Exists(path))
            {
                return CreateActionResultInstance(ResponseViewModel<NoContent>.Fail("photo is not found", 404));
            }
            System.IO.File.Delete(path);
            return CreateActionResultInstance(ResponseViewModel<NoContent>.Success(204));
        }
    }
}
