var posts=["2025/10/30/hello-world/","2025/11/01/为什么我们玩第一人称3D游戏会头晕恶心？如何缓解？/","2025/10/31/探寻恒星冕环的温度分布/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };