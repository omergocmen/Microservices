using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace Shared.Dtos
{
    public class ResponseViewModel<T>
    {
        public T Data { get; set; }
        public int StatusCode { get; set; }
        public bool IsSuccess { get; set; }

        public List<string> Errors { get; set; }

        public static ResponseViewModel<T> Success(T data, int statusCode)
        {
            return new ResponseViewModel<T> { Data = data, StatusCode = statusCode, IsSuccess=true };   
        }

        public static ResponseViewModel<T> Success(int statusCode)
        {
            return new ResponseViewModel<T> { Data=default(T),StatusCode = statusCode, IsSuccess=false };
        }
        public static ResponseViewModel<T> Fail(List<string> errors, int statusCode)
        {
            return new ResponseViewModel<T>
            {
                Errors = errors,
                StatusCode = statusCode,
                IsSuccess = false
            };
        }
        public static ResponseViewModel<T> Fail(string error, int statusCode)
        {
            return new ResponseViewModel<T>
            {
                Errors = new List<string> {error},
                StatusCode = statusCode,
                IsSuccess = false
            };
        }
    }
}
