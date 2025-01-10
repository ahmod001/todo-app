<?php

namespace App\Traits;

use Illuminate\Http\JsonResponse;

trait Response
{

    /**
     * @method success returns a object for success response
     * 
     * @param mixed $msg
     * @param mixed $code
     * @return \Illuminate\Http\JsonResponse
     */
    public function success($msg = 'Request successful', $code = 200, $data = null): JsonResponse
    {
        return response()->json([
            'status' => 'success',
            'msg' => $msg,
            'data' => $data,
            'code' => $code,
        ], $code);
    }

    /**
     * @method failed returns a object for failed response
     * 
     * @param mixed $msg
     * @param mixed $code
     * @return \Illuminate\Http\JsonResponse
     */
    public function failed($msg = 'Request failed', $code = 400): JsonResponse
    {
        return response()->json([
            'status' => 'failed',
            'msg' => $msg,
            'code' => $code,
        ], $code);
    }
}
