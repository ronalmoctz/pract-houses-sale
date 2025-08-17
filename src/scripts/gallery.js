export function initGallery() {
  // DOM Elements
  const elements = {
    tabPhotos: document.getElementById("tab-photos"),
    tabVideos: document.getElementById("tab-videos"),
    photosGrid: document.getElementById("photos-grid"),
    videosGrid: document.getElementById("videos-grid"),
    modal: document.getElementById("gallery-modal"),
    modalMedia: document.getElementById("modal-media"),
    modalCaption: document.getElementById("modal-caption"),
    btnClose: document.getElementById("modal-close"),
    btnPrev: document.getElementById("modal-prev"),
    btnNext: document.getElementById("modal-next"),
  };

  // State
  let state = {
    activeTab: "photos",
    currentIndex: 0,
  };

  // Tab Management con CSS en lugar de JavaScript
  function setActiveTab(tab) {
    state.activeTab = tab;
    
    // Toggle visibility usando clases CSS
    if (tab === "photos") {
      elements.photosGrid.classList.remove("hidden");
      elements.videosGrid.classList.add("hidden");
      
      // Update button states
      updateTabButton(elements.tabPhotos, true);
      updateTabButton(elements.tabVideos, false);
    } else {
      elements.photosGrid.classList.add("hidden");
      elements.videosGrid.classList.remove("hidden");
      
      updateTabButton(elements.tabPhotos, false);
      updateTabButton(elements.tabVideos, true);
    }
  }

  function updateTabButton(button, isActive) {
    if (isActive) {
      button.className = "px-18 py-4 font-neue-kaine text-md font-bold transition-all duration-200 ease-in-out bg-gray-900 text-white";
    } else {
      button.className = "px-18 py-4 font-neue-kaine text-md font-bold transition-all duration-200 ease-in-out bg-white text-gray-900 hover:bg-gray-50";
    }
  }

  // Modal Management con View Transitions
  function openModal(button) {
    const type = button.dataset.type;
    const index = parseInt(button.dataset.index);
    const src = button.dataset.src;
    const alt = button.dataset.alt;
    
    state.currentIndex = index;
    
    // View Transition si está disponible
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        renderModalContent(type, src, alt, index);
        showModal();
      });
    } else {
      renderModalContent(type, src, alt, index);
      showModal();
    }
  }

  function renderModalContent(type, src, alt, index) {
    elements.modalMedia.innerHTML = "";
    
    if (type === "video") {
      const video = Object.assign(document.createElement("video"), {
        src,
        controls: true,
        autoplay: true,
        playsInline: true,
        className: "w-full h-full object-contain",
      });
      elements.modalMedia.appendChild(video);
      elements.modalCaption.textContent = `Video ${index + 1}: ${alt}`;
    } else {
      const img = Object.assign(document.createElement("img"), {
        src,
        alt,
        className: "w-full h-full object-contain",
      });
      elements.modalMedia.appendChild(img);
      elements.modalCaption.textContent = `Imagen ${index + 1}: ${alt}`;
    }
  }

  function showModal() {
    elements.modal.classList.remove("hidden");
    elements.modal.classList.add("flex");
    document.body.style.overflow = "hidden";
    elements.btnClose.focus();
  }

  function hideModal() {
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        elements.modal.classList.add("hidden");
        elements.modal.classList.remove("flex");
        document.body.style.overflow = "";
      });
    } else {
      elements.modal.classList.add("hidden");
      elements.modal.classList.remove("flex");
      document.body.style.overflow = "";
    }
  }

  // Navigation
  function getVisibleItems() {
    const grid = state.activeTab === "photos" ? elements.photosGrid : elements.videosGrid;
    return Array.from(grid.querySelectorAll(".gallery-item"));
  }

  function navigateModal(direction) {
    const items = getVisibleItems();
    if (!items.length) return;
    
    if (direction === "next") {
      state.currentIndex = (state.currentIndex + 1) % items.length;
    } else {
      state.currentIndex = (state.currentIndex - 1 + items.length) % items.length;
    }
    
    const button = items[state.currentIndex];
    const type = button.dataset.type;
    const src = button.dataset.src;
    const alt = button.dataset.alt;
    
    renderModalContent(type, src, alt, state.currentIndex);
  }

  // Event Listeners
  function setupEventListeners() {
    // Tab buttons
    elements.tabPhotos?.addEventListener("click", () => setActiveTab("photos"));
    elements.tabVideos?.addEventListener("click", () => setActiveTab("videos"));

    // Gallery items - Event delegation
    document.addEventListener("click", (e) => {
      const galleryItem = e.target.closest(".gallery-item");
      if (galleryItem) {
        e.preventDefault();
        openModal(galleryItem);
      }
    });

    // Modal controls
    elements.btnClose?.addEventListener("click", hideModal);
    elements.btnNext?.addEventListener("click", () => navigateModal("next"));
    elements.btnPrev?.addEventListener("click", () => navigateModal("prev"));

    // Keyboard navigation
    document.addEventListener("keydown", (e) => {
      if (elements.modal.classList.contains("hidden")) return;
      
      switch (e.key) {
        case "Escape":
          hideModal();
          break;
        case "ArrowRight":
          navigateModal("next");
          break;
        case "ArrowLeft":
          navigateModal("prev");
          break;
      }
    });

    // Click outside to close
    elements.modal?.addEventListener("click", (e) => {
      if (e.target === elements.modal) {
        hideModal();
      }
    });
  }

  // Initialize
  setActiveTab("photos");
  setupEventListeners();
}