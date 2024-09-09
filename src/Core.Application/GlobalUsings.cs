global using System;
global using System.Linq;
global using System.Threading;
global using System.Reflection;
global using System.Threading.Tasks;
global using System.Linq.Expressions;
global using System.Collections.Generic;
global using Microsoft.EntityFrameworkCore;
global using Microsoft.Extensions.DependencyInjection;

global using MediatR;

global using Exception.Lib;
global using Kernel.Lib.Extension;
global using UserContext.Lib.Extension;
global using UserContext.Lib.Interface;
global using GenericRepository.Lib.Interface;
global using DynamicSearch.Lib.Enum;
global using DynamicSearch.Lib.Model;
global using DynamicSearch.Lib.Service;
global using DynamicSearch.Lib.Constant;
global using DynamicSearch.Lib.Extension;
global using DynamicSearch.Lib.Interface;

global using Core.Domain.Entity;
global using Core.Application.Model;
global using Core.Application.Service;
global using Core.Application.Command;
global using Core.Application.Constants;
global using Core.Application.Repository;
global using Core.Application.Service.Interface;