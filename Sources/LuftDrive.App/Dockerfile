#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:5.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
WORKDIR /src
COPY ["LuftDrive.App/LuftDrive.App.csproj", "LuftDrive.App/"]
RUN dotnet restore "LuftDrive.App/LuftDrive.App.csproj"
COPY . .
WORKDIR "/src/LuftDrive.App"
RUN dotnet build "LuftDrive.App.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "LuftDrive.App.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "LuftDrive.App.dll"]