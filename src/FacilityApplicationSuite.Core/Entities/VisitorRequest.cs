namespace FacilityApplicationSuite.Core.Entities;

public class VisitorRequest
{
    public Guid Id { get; set; }
    public string VisitorName { get; set; } = string.Empty;
    public string VisitorEmail { get; set; } = string.Empty;
    public string VisitorPhone { get; set; } = string.Empty;
    public string? Company { get; set; }
    public string Purpose { get; set; } = string.Empty;
    public Guid RequestedBy { get; set; }
    public string RequestedByName { get; set; } = string.Empty;
    public DateTime VisitDate { get; set; }
    public bool EscortRequired { get; set; }
    public Guid? EscortId { get; set; }
    public string? EscortName { get; set; }
    public string AccessZones { get; set; } = string.Empty; // Stored as JSON array
    public VisitorRequestStatus Status { get; set; }
    public string? BadgeIssued { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public Guid? ApprovedBy { get; set; }
    public DateTime? ApprovedAt { get; set; }
}

public enum VisitorRequestStatus
{
    Pending,
    Approved,
    Rejected,
    Completed
}
