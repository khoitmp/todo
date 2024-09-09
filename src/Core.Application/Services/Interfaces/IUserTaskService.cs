namespace Core.Application.Service.Interface;

public interface IUserTaskService : ISearchService<UserTask, int, SearchUserTasksCommand, UserTaskDto>
{
    Task<UserTaskDto> AddUserTaskAsync(AddUserTaskCommand command);
    Task<BaseResponse> UpdateUserTaskAsync(UpdateUserTaskCommand command);
    Task<BaseResponse> DeleteUserTaskAsync(DeleteUserTasksCommand command);
}