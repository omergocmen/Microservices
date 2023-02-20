namespace Catalog.API.Dtos
{
    public class CourseCreateDto
    {

        public string Name { get; set; }
        public string Description { get; set; }

        public double Price { get; set; }

        public string UserId { get; set; }
        public string PictureUrl { get; set; }

        public FeatureDto FeatureDto { get; set; }

        public string CategoryId { get; set; }

    }
}
