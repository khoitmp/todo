# Stage 1: Build the application
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build

WORKDIR /app

## Copy all projects to WORKDIR to restore all dependencies first
# COPY ./NuGet.Config /app/NuGet.Config
COPY ./src/Core.Api/*.csproj         /app/src/Core.Api/
COPY ./src/Core.Application/*.csproj /app/src/Core.Application/
COPY ./src/Core.Domain/*.csproj      /app/src/Core.Domain/
COPY ./src/Core.Persistence/*.csproj /app/src/Core.Persistence/

RUN dotnet restore /app/src/Core.Api/*.csproj /property:Configuration=Release -nowarn:msb3202,nu1503

# Copy the rest to the WORKDIR
COPY ./src/ /app/src/

RUN dotnet publish /app/src/Core.Api/*.csproj --no-restore -c Release -o /app/out/

# Stage 2: Serve the built application with Kestrel
FROM mcr.microsoft.com/dotnet/aspnet:8.0 as final

ENV ASPNETCORE_URLS http://+:80

WORKDIR /app

COPY --from=build /app/out /app/

ENV DOTNET_SYSTEM_GLOBALIZATION_INVARIANT=false

ENTRYPOINT ["dotnet", "Core.Api.dll"]

# Debug
# CMD ["tail", "-f", "/dev/null"]