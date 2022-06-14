<template>
  <footer class="footer">
    <span>
      <b>{{ pendingTodos.length }}</b>
      {{ pendingTodos.length === 1 ? 'item' : 'items' }} left
    </span>

    <ul class="filters">
      <li>
        <router-link
          to="/"
          exact
        >
          All
        </router-link>
      </li>
      <li>
        <router-link to="active">
          Active
        </router-link>
      </li>
      <li>
        <router-link to="completed">
          Completed
        </router-link>
      </li>
    </ul>

    <div
      v-if="!hideClearComplete"
      class="clear-completed"
      @click="clearCompleted"
    >
      Clear completed
    </div>
  </footer>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name:  'TodoListCardFooter',
  props: {
    todos:             { type: Array, required: true },
    hideClearComplete: { type: Boolean, default: false }
  },
  computed: {
    pendingTodos() {
      return this.todos.filter(todo => !todo.completed)
    }
  },
  methods: {
    ...mapActions(['clearCompleted']),
  }
}
</script>

<style lang="scss">
.footer {
	color: #777;
	padding: 15px 15px 0px 15px;
	border-top: 1px solid #e6e6e6;
  display: flex;
  align-content: center;
  justify-content: space-between;
  @media (max-width: 430px) {
    height: 50px;
  }

  &:before {
    z-index: 0;
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 50px;
    overflow: hidden;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2),
                0 8px 0 -3px #f6f6f6,
                0 9px 1px -3px rgba(0, 0, 0, 0.2),
                0 16px 0 -6px #f6f6f6,
                0 17px 2px -6px rgba(0, 0, 0, 0.2);
  }

  .filters {
    z-index: 1;
    li {
      display: inline;
      a {
        color: inherit;
        margin: 3px;
        padding: 3px 7px;
        text-decoration: none;
        border: 1px solid transparent;
        border-radius: 3px;
        &:hover {
          border-color: rgba(175, 47, 47, 0.1);
        }
        &.router-link-active {
          border-color: rgba(175, 47, 47, 0.2);
        }
      }
    }
  }
  .clear-completed {
    z-index: 1;
    text-decoration: none;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>