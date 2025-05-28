// group-buttons.js
// Auto-assign attributes to group buttons
document.addEventListener('DOMContentLoaded', function() {
  const groupData = {
    'group1': {
      title: 'Clara, Katja, Marie, Stella',
      color: 'primary'
    },
    'group2': {
      title: 'Konni, Jules, Jojo, Rapha', 
      color: 'success'
    },
    'group3': {
      title: 'Jan, Lena, Gacel, Felix',
      color: 'warning'
    },
    'group4': {
      title: 'Cedi, Patti, Daniel, Dani, Kim',
      color: 'danger'
    }
  };
  
  // Find all elements with group classes and add attributes
  Object.keys(groupData).forEach(groupClass => {
    const elements = document.querySelectorAll('.' + groupClass);
    elements.forEach(el => {
      el.setAttribute('title', groupData[groupClass].title);
      el.setAttribute('role', 'button');
      el.setAttribute('data-toggle', 'tooltip');
      
      // Add Bootstrap classes if not already present
      if (!el.classList.contains('btn')) {
        el.classList.add('btn');
      }
      if (!el.classList.contains('btn-outline-' + groupData[groupClass].color)) {
        el.classList.add('btn-outline-' + groupData[groupClass].color);
      }
    });
  });
  
  // Initialize Bootstrap tooltips if available
  if (typeof bootstrap !== 'undefined' && bootstrap.Tooltip) {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
  }
});
