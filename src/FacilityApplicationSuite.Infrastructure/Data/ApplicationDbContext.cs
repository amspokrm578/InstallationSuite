using Microsoft.EntityFrameworkCore;
using FacilityApplicationSuite.Core.Entities;

namespace FacilityApplicationSuite.Infrastructure.Data;

public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
        : base(options)
    {
    }

    public DbSet<User> Users { get; set; }
    public DbSet<Role> Roles { get; set; }
    public DbSet<ModulePermission> ModulePermissions { get; set; }
    public DbSet<AuditLog> AuditLogs { get; set; }
    public DbSet<Personnel> Personnel { get; set; }
    public DbSet<VisitorRequest> VisitorRequests { get; set; }
    public DbSet<AccessLog> AccessLogs { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        // User configuration
        modelBuilder.Entity<User>(entity =>
        {
            entity.HasKey(e => e.Id);
            entity.Property(e => e.Email).IsRequired();
            entity.Property(e => e.Name).IsRequired();
            entity.Property(e => e.PasswordHash).IsRequired();
            entity.HasIndex(e => e.Email).IsUnique();
        });

        // Role configuration
        modelBuilder.Entity<Role>(entity =>
        {
            entity.HasKey(e => e.Id);
            entity.Property(e => e.Name).IsRequired();
            entity.HasMany(e => e.Users)
                .WithMany(u => u.Roles)
                .UsingEntity("UserRole");
        });

        // ModulePermission configuration
        modelBuilder.Entity<ModulePermission>(entity =>
        {
            entity.HasKey(e => e.Id);
            entity.Property(e => e.ModuleId).IsRequired();
            entity.HasOne(e => e.Role)
                .WithMany(r => r.ModulePermissions)
                .HasForeignKey(e => e.RoleId);
        });

        // AuditLog configuration
        modelBuilder.Entity<AuditLog>(entity =>
        {
            entity.HasKey(e => e.Id);
            entity.Property(e => e.Action).IsRequired();
            entity.Property(e => e.Resource).IsRequired();
            entity.HasIndex(e => e.Timestamp);
        });

        // Personnel configuration
        modelBuilder.Entity<Personnel>(entity =>
        {
            entity.HasKey(e => e.Id);
            entity.Property(e => e.BadgeNumber).IsRequired();
            entity.HasIndex(e => e.BadgeNumber).IsUnique();
        });

        // VisitorRequest configuration
        modelBuilder.Entity<VisitorRequest>(entity =>
        {
            entity.HasKey(e => e.Id);
            entity.Property(e => e.VisitorName).IsRequired();
            entity.Property(e => e.Purpose).IsRequired();
        });

        // AccessLog configuration
        modelBuilder.Entity<AccessLog>(entity =>
        {
            entity.HasKey(e => e.Id);
            entity.Property(e => e.BadgeNumber).IsRequired();
            entity.HasIndex(e => e.Timestamp);
        });
    }
}
