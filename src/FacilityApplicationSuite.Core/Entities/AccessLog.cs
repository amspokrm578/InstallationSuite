namespace FacilityApplicationSuite.Core.Entities;

public class AccessLog
{
    public Guid Id { get; set; }
    public Guid UserId { get; set; }
    public string BadgeNumber { get; set; } = string.Empty;
    public string AccessZone { get; set; } = string.Empty;
    public AccessType AccessType { get; set; }
    public DateTime Timestamp { get; set; } = DateTime.UtcNow;
    public AccessMethod Method { get; set; }
    public AccessResult Result { get; set; }
    public string? Reason { get; set; }
}

public enum AccessType
{
    Entry,
    Exit
}

public enum AccessMethod
{
    Badge,
    Biometric,
    Manual
}

public enum AccessResult
{
    Granted,
    Denied
}
