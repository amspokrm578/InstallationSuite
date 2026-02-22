namespace FacilityApplicationSuite.Core.Entities;

public class ModulePermission
{
    public Guid Id { get; set; }
    public Guid RoleId { get; set; }
    public string ModuleId { get; set; } = string.Empty;
    public PermissionLevel PermissionLevel { get; set; }

    // Navigation property
    public Role? Role { get; set; }
}

public enum PermissionLevel
{
    None,
    View,
    Modify,
    Admin
}
