namespace Core.Application.Service.Interface;

public interface IUserService
{
    Task<UserDto> LoginUserAsync(LoginUserCommand command);
}