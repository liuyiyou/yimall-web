/**   
 * api接口统一管理
 */
import { get, post, del, put } from './http';

// 用户收货地址相关

//新增收货地址
export const addAddress = p => put('apis/user/delivery/add', p);
//编辑收货地址
export const editAddress = p => post('apis/user/delivery/edit', p);
// 获取用户地址列表
export const apiAddressList = p => post('apis/user/delivery/vant/list', p);
//删除用户收获地址
export const delAddress = p => del('apis/user/delivery/' + p);



//订单相关
export const orderList = p => post('apis/order/list', p);
