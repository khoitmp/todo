namespace Core.Application.Service;

public class UserTaskService : BaseSearchService<UserTask, int, SearchUserTasksCommand, UserTaskDto>, IUserTaskService
{
    private readonly ICoreUnitOfWork _unitOfWork;
    private readonly IUserContext _userContext;

    public UserTaskService(IServiceProvider serviceProvider, ICoreUnitOfWork unitOfWork, IUserContext userContext)
        : base(serviceProvider, UserTaskDto.Create)
    {
        _unitOfWork = unitOfWork;
        _userContext = userContext;
    }

    public async Task<UserTaskDto> AddUserTaskAsync(AddUserTaskCommand command)
    {
        var entity = AddUserTaskCommand.Create(command);

        entity.UserName = _userContext.UserName;

        await _unitOfWork.UserTaskRepository.AddAsync(entity);
        await _unitOfWork.CommitAsync();

        return UserTaskDto.Create(entity);
    }

    public async Task<BaseResponse> UpdateUserTaskAsync(UpdateUserTaskCommand command)
    {
        var entity = UpdateUserTaskCommand.Create(command);

        entity.UserName = _userContext.UserName;

        await _unitOfWork.UserTaskRepository.UpdateAsync(entity.Id, entity);
        await _unitOfWork.CommitAsync();

        return BaseResponse.Success;
    }

    public async Task<BaseResponse> DeleteUserTaskAsync(DeleteUserTasksCommand command)
    {
        var entities = await _unitOfWork.UserTaskRepository.AsQueryable().Where(i => command.Ids.Contains(i.Id)).ToListAsync();
        foreach (var entity in entities)
        {
            entity.Deleted = true;
            entity.UpdatedUtc = DateTime.UtcNow;
        }

        await _unitOfWork.CommitAsync();

        return BaseResponse.Success;
    }

    protected override Type GetDbType()
    {
        return typeof(IUserTaskRepository);
    }
}