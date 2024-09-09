global using System;
global using System.Threading.Tasks;
global using Microsoft.AspNetCore.Mvc;
global using Microsoft.AspNetCore.Hosting;
global using Microsoft.Extensions.Hosting;
global using Microsoft.AspNetCore.Builder;
global using Microsoft.Extensions.Configuration;
global using Microsoft.Extensions.DependencyInjection;

global using MediatR;

global using UserContext.Lib;
global using Kernel.Lib.Constant;
global using Exception.Lib.Extension;

global using Core.Application.Command;
global using Core.Persistence.Extension;
global using Core.Application.Constants;
global using Core.ApplicationExtension.Extension;