namespace FacilityApplicationSuite.Core.Entities;

public class Personnel
{
    public Guid Id { get; set; }
    public Guid UserId { get; set; }
    public string BadgeNumber { get; set; } = string.Empty;
    public ClearanceLevel ClearanceLevel { get; set; }
    public string AccessZones { get; set; } = string.Empty; // Stored as JSON array
    public DateTime BadgeExpiry { get; set; }
    public DateTime? ClearanceExpiry { get; set; }
    public PersonnelStatus Status { get; set; }
    public DateTime IssuedDate { get; set; }
    public DateTime? LastVerified { get; set; }
}

public enum PersonnelStatus
{
    Active,
    Inactive,
    Revoked
}
