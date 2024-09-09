namespace Core.Persistence.Context;

public class CoreDbContext : DbContext
{
    public DbSet<User> Users { get; set; }
    public DbSet<UserTask> UserTasks { get; set; }

    public CoreDbContext(DbContextOptions<CoreDbContext> options)
        : base(options)
    {
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.ApplyConfiguration(new UserConfiguration());
        modelBuilder.ApplyConfiguration(new UserTaskConfiguration());
    }
}