namespace Core.Persistence.Configuration;

public class UserConfiguration : IEntityTypeConfiguration<User>
{
    public void Configure(EntityTypeBuilder<User> builder)
    {
        builder.ToTable("users");
        builder.Property(x => x.Id).HasColumnName("id");
        builder.Property(x => x.UserName).HasColumnName("user_name");
        builder.Property(x => x.Password).HasColumnName("password");
        builder.Property(x => x.Role).HasColumnName("role");
        builder.Property(x => x.CreatedUtc).HasColumnName("created_utc");
        builder.Property(x => x.UpdatedUtc).HasColumnName("updated_utc");
        builder.Property(x => x.Deleted).HasColumnName("deleted");
        builder.HasQueryFilter(x => !x.Deleted);
    }
}