using System;
using System.Collections.Generic;
using System.Text;
using System.Text.Json.Serialization;

namespace Shared.Dtos
{
    public class ResponseViewModel<T>
    {
        public T Data { get; set; }

        [JsonIgnore]
        public int StatusCode { get; set; }

        [JsonIgnore]
        public bool IsSuccessful { get; set; }

        public List<string> Errors { get; set; }

        // Static Factory Method
        public static ResponseViewModel<T> Success(T data, int statusCode)
        {
            return new ResponseViewModel<T> { Data = data, StatusCode = statusCode, IsSuccessful = true };
        }

        public static ResponseViewModel<T> Success(int statusCode)
        {
            return new ResponseViewModel<T> { Data = default(T), StatusCode = statusCode, IsSuccessful = true };
        }

        public static ResponseViewModel<T> Fail(List<string> errors, int statusCode)

        {
            return new ResponseViewModel<T>
            {
                Errors = errors,
                StatusCode = statusCode,
                IsSuccessful = false
            };
        }

        public static ResponseViewModel<T> Fail(string error, int statusCode)
        {
            return new ResponseViewModel<T> { Errors = new List<string>() { error }, StatusCode = statusCode, IsSuccessful = false };
        }
    }
}