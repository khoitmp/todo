namespace Core.Application.Repository;

public interface ICoreUnitOfWork : IUnitOfWork
{
    IUserRepository UserRepository { get; }
    IUserTaskRepository UserTaskRepository { get; }
}