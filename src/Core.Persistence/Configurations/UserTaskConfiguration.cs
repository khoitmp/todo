namespace Core.Persistence.Configuration;

public class UserTaskConfiguration : IEntityTypeConfiguration<UserTask>
{
    public void Configure(EntityTypeBuilder<UserTask> builder)
    {
        builder.ToTable("user_tasks");
        builder.Property(x => x.Id).HasColumnName("id");
        builder.Property(x => x.UserName).HasColumnName("user_name");
        builder.Property(x => x.Description).HasColumnName("description");
        builder.Property(x => x.Completed).HasColumnName("completed");
        builder.Property(x => x.UpdatedUtc).HasColumnName("updated_utc");
        builder.Property(x => x.CreatedUtc).HasColumnName("created_utc");
        builder.Property(x => x.Deleted).HasColumnName("deleted");
        builder.HasQueryFilter(x => !x.Deleted);
    }
}