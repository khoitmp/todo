namespace Core.Application.Command;

public class LoginUserCommand : IRequest<UserDto>
{
    public string UserName { get; set; }
    public string Password { get; set; }
}