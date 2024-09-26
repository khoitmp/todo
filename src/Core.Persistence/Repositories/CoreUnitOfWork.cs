namespace Core.Persistence.Repository;

public class CoreUnitOfWork : BaseUnitOfWork, ICoreUnitOfWork
{
    public IUserRepository UserRepository { get; }
    public IUserTaskRepository UserTaskRepository { get; }

    public CoreUnitOfWork(
        CoreDbContext context,
        IUserRepository userRepository,
        IUserTaskRepository userTaskRepository)
        : base(context)
    {
        UserRepository = userRepository;
        UserTaskRepository = userTaskRepository;
    }
}