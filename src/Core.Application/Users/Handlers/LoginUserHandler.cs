namespace Core.Application.Handler;

public class LoginUserHandler : IRequestHandler<LoginUserCommand, UserDto>
{
    private readonly IUserService _service;

    public LoginUserHandler(IUserService service)
    {
        _service = service;
    }

    public Task<UserDto> Handle(LoginUserCommand request, CancellationToken cancellationToken)
    {
        return _service.LoginUserAsync(request);
    }
}