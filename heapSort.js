//大顶堆：左右子节点都比自身小
//小顶堆：左右子节点都比自身大
//关键点：自上而下非叶子节点都进行交换，因为堆是完全二叉树，所以最后一个非叶子为arr.length/2-1
//第i个节点的左右节点：2i+1和2i+2

//将第i个节点和左右子节点比较
function nodeHeapSort(i, arrayLength) {
    let left = i * 2 + 1
    let right = 2 * i + 2
    let change
    if (left < arrayLength && array[left] < array[i]) {
        change = array[left]
        array[left] = array[i]
        array[i] = change
    }
    if (right < arrayLength && array[right] < array[i]) {
        change = array[right]
        array[right] = array[i]
        array[i] = change
    }
}
function heapSort(hasChildrenLnegth){
   //所有非叶子节点从下而上排序
   for(let i=hasChildrenLnegth;i>=0;i--){
       nodeHeapSort(i,length*2+1)
   }
}

//想要前几小就排几次，这是全排
for(let j=array.length;j>0;j--){
    heapSort(Math.floor(j/2-1))
    let change = array[0];
    array[0] = array[j-1];
    array[j-1] = change;
}
