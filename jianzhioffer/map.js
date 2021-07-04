let map = new Map([
    ['F', 'no'],
    ['T', 'yes'],
   ]);
   for (let key of map.keys()) {
    console.log(key);
   }
   // "F"
   // "T"
   for (let value of map.values()) {
    console.log(value);
   }
   // "no"
   // "yes"
   for (let item of map.entries()) {
    console.log(item[0], item[1]);
   }
   // "F" "no"
   // "T" "yes"
   // 或者
   for (let [key, value] of map.entries()) {
    console.log(key, value);
   }
   // 等同于使用map.entries()
   for (let [key, value] of map) {
    console.log(key, value);
   }

var map = new Map();

 

// 2.将键值对放入map对象

map.set("key",value)

map.set("key1",value1)

map.set("key2",value2)

 

// 3.根据key获取map值

map.get(key)

 

// 4.删除map指定对象

delete map[key]

// 或

map.delete(key)