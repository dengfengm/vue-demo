<template>
  <div class="about">
    <h1>This is an demo page</h1>
    <div>
      <input type="text" placeholder="标题" v-model="obj.title" />
      <input type="text" placeholder="发布人" v-model="obj.user" />
      <input type="date" placeholder="发布时间" v-model="obj.date" />
      <button @click="add()">新增</button>
    </div>
    <div>
      <table cellpadding="5" cellspacing="0">
        <thead>
          <tr>
            <th>序号</th>
            <th>标题</th>
            <th>发布人</th>
            <th>发布时间</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(v,i) in lists" :key="i">
            <td>{{i+1}}</td>
            <td>{{v.title}}</td>
            <td>{{v.user}}</td>
            <td>{{v.date}}</td>
            <td>
              <button @click="del(i)">删除</button>
              <button @click="edit(i)">编辑</button>
            </td>
          </tr>
        </tbody>
      </table>

      <div id="layer" v-show="flag">
        <div>
          编辑
          <span @click="flag=false">x</span>
        </div>
        <div>
          <input type="text" placeholder="标题" v-model="editobj.title"/>
          <input type="text" placeholder="发布人"  v-model="editobj.user"/>
          <input type="date" placeholder="发布时间"  v-model="editobj.date"/>
          <button @click="update()">更新</button>
          <button @click="flag=false">取消</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Demo',
  data () {
    return {
      obj: {
        title: '',
        user: '',
        date: ''
      },
      editobj: {
        title: '',
        user: '',
        date: ''
      },
      lists: [
        { title: '标题1', user: 'a', date: '2020-02-01' },
        { title: '标题2', user: 'b', date: '2020-02-03' }
      ],
      flag: false,
      index: 0
    }
  },
  methods: {
    add: function () {
      const { title, user, date } = this.obj
      if (!title || !user || !date) return
      this.lists.push({ title, user, date })
      this.obj = {}
    },
    del: function (i) {
      this.lists.splice(i, 1)
    },
    edit: function (i) {
      this.index = i
      this.flag = true
      this.editobj = { ...this.lists[i] }
    },
    update: function () {
      this.lists[this.index] = this.editobj
      this.flag = false
    }
  }
}
</script>
