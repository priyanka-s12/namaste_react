<!--
Home
Body
    Sidebar
        MenuItems
    MainContainer
        ButtonList
        VideoContainer
            VideoCard
 -->

cache:
time complexity to search item in array = big o(n) - linear search
time complexity to search item in Object = big o(1) -

array.indexOf/ includes - o(n)

optimised way
{
i: [],
ip: []
}

new Map()/Set()/ HashedMap()

---

searchSlice.js
Inside a createSlice reducer, you are allowed to mutate state directly, thanks to Immer, which powers Redux Toolkit under the hood.

But if you do this:
state = { ...state, ...action.payload }; // ❌
You're reassigning the state variable, which doesn't update the actual Redux state — it just rebinds the local variable state, and that does nothing in Immer.

✅ Correct Way (Mutate the state object):
Instead, you should mutate the existing state object directly:
cachedResults: (state, action) => {
Object.assign(state, action.payload); // ✅ safe mutation
}

❌ Avoid These in Slice Reducers:
state = newState // ❌ Won't work
return newState // ✅ Only works if you explicitly return the object
If you want to replace the entire state, then you must return the new object explicitly:
cachedResults: (state, action) => {
return { ...state, ...action.payload }; // ✅ full replacement
}

---

LRU Cache - least recently used
restrict cache size to be used 100 keys
after reaching 100, keep removing first ones

--
Comments Feature
2 level nesting in Youtube

- 10 (n) level nesting - reddit - pyramid of doom - tree structure - recursion
