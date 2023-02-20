using MongoDB.Bson.Serialization.Attributes;

namespace Catalog.API.Entities
{
    public class Category
    {
        [BsonId]
        [BsonRepresentation(MongoDB.Bson.BsonType.ObjectId)]
        public int Id { get; set; }

        public string Name { get; set; }    
    }
}
