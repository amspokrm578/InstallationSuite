# FacilityApplicationSuite - Project Setup

## Project Overview
A full-stack application using:
- **Frontend**: React + TypeScript with Vite
- **Backend**: ASP.NET Core Web API
- **Data Layer**: Entity Framework Core with T-SQL on SQLLocalDB
- **Database Instance**: `db_application_suite`

## Target Directory Structure

```
/FacilityApplicationSuite
│
├── /src/client-app (React + TypeScript)
│   ├── /src
│   │   ├── /components    (Reusable UI: Buttons, Cards)
│   │   ├── /hooks         (Custom logic: useAuth, useTools)
│   │   ├── /services      (API calls: authService.ts, toolService.ts)
│   │   ├── /types         (Shared TS interfaces)
│   │   └── App.tsx        (Routing and global providers)
│   └── vite.config.ts     (Build config + Proxy to backend)
│
├── /src/FacilityApplicationSuite.API (ASP.NET Core Web API)
│   ├── /Controllers       (Handles HTTP requests)
│   ├── /Middleware        (JWT validation logic)
│   └── Program.cs         (DI registration & pipeline)
│
├── /src/FacilityApplicationSuite.Core (Logic Layer)
│   ├── /Entities          (C# Classes for SQL Tables)
│   ├── /Interfaces        (Repository/Service contracts)
│   └── /Services          (Business rules)
│
├── /src/FacilityApplicationSuite.Infrastructure (Data Layer)
│   ├── /Data              (EF Core DbContext)
│   ├── /Migrations        (T-SQL schema history)
│   └── /Repositories      (Database implementation)
│
└── FacilityApplicationSuite.sln
```

## Current Status

### Completed
- ✅ SQLLocalDB installation
- ✅ Initial project structure created (client, server, src folders)
- ✅ ASP.NET projects created (MyProject.API, MyProject.Core, MyProject.Infrastructure)

### In Progress
- 🔄 Rename projects from `MyProject.*` to `FacilityApplicationSuite.*`
- 🔄 Update solution file name

### Next Steps (Todo List)

1. **Rename .NET Projects & Solution**
   - Rename `MyProject.API` → `FacilityApplicationSuite.API`
   - Rename `MyProject.Core` → `FacilityApplicationSuite.Core`
   - Rename `MyProject.Infrastructure` → `FacilityApplicationSuite.Infrastructure`
   - Rename `MyProject.slnx` → `FacilityApplicationSuite.sln`
   - Update all `.csproj` references

2. **Set up SQLLocalDB Connection**
   - Update `appsettings.json` with connection string:
     ```
     Server=(localdb)\\db_application_suite;Database=FacilityApplicationSuite;Trusted_Connection=true;
     ```

3. **Configure Entity Framework Core**
   - Create DbContext in FacilityApplicationSuite.Infrastructure
   - Register DbContext in Program.cs Dependency Injection

4. **Create EF Core Migration & Database**
   - Create initial migration: `dotnet ef migrations add InitialCreate`
   - Apply migration: `dotnet ef database update`

5. **Set up Dependency Injection**
   - Register repositories in Program.cs
   - Register services in Program.cs

6. **Configure CORS**
   - Allow frontend to communicate with API

7. **Set up Vite Proxy**
   - Configure proxy in `client/vite.config.ts` to backend

## Database Configuration

**Instance Name**: `db_application_suite`
**Database Name**: `FacilityApplicationSuite`
**Connection String**:
```
Server=(localdb)\\db_application_suite;Database=FacilityApplicationSuite;Trusted_Connection=true;
```

## Notes
- Close any open IDEs before renaming directories (permission issues)
- Both `MyProject.slnx` and `MyProject.API.csproj` reference each other and need updates
- Remember to restore NuGet packages after renaming: `dotnet restore`
