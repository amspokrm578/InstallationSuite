namespace FacilityApplicationSuite.Core.Entities;

public class User
{
    public Guid Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string? BadgeId { get; set; }
    public ClearanceLevel ClearanceLevel { get; set; }
    public string? Department { get; set; }
    public bool Active { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;
    public string PasswordHash { get; set; } = string.Empty;

    // Navigation properties
    public ICollection<Role> Roles { get; set; } = new List<Role>();
}

public enum ClearanceLevel
{
    Public,
    Confidential,
    Secret,
    TopSecret
}
