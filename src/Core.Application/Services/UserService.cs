namespace Core.Application.Service;

public class UserService : IUserService
{
    private readonly ICoreUnitOfWork _unitOfWork;

    public UserService(ICoreUnitOfWork unitOfWork)
    {
        _unitOfWork = unitOfWork;
    }

    public async Task<UserDto> LoginUserAsync(LoginUserCommand command)
    {
        var entity = await _unitOfWork.UserRepository.AsQueryable().FirstOrDefaultAsync(u => u.UserName == command.UserName);
        if (entity == null) throw new EntityNotFoundException();
        else return UserDto.Create(entity);
    }
}