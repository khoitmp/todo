namespace Core.Application.Model;

public class UserDto
{
    public Guid Id { get; set; }
    public string UserName { get; set; }
    public string Role { get; set; }
    public string Token => TokenExtension.GenerateToken(Id, UserName, Role);
    public DateTime CreatedUtc { get; set; }
    public DateTime UpdatedUtc { get; set; }

    private static Func<User, UserDto> Converter = Projection.Compile();

    public static Expression<Func<User, UserDto>> Projection
    {
        get
        {
            return entity => new UserDto
            {
                Id = entity.Id,
                UserName = entity.UserName,
                Role = entity.Role,
                CreatedUtc = entity.CreatedUtc,
                UpdatedUtc = entity.UpdatedUtc
            };
        }
    }

    public static UserDto Create(User entity)
    {
        if (entity == null)
        {
            return null;
        }
        return Converter(entity);
    }
}